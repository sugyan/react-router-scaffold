class BookForm extends React.Component {
    constructor() {
        this.state = {
            alerts: []
        };
    }
    handleSubmit(e) {
        e.preventDefault();

        var params = {};
        Object.keys(this.refs).forEach((key) => {
            params[key] = React.findDOMNode(this.refs[key]).value;
        });
        $.ajax({
            url: this.props.action,
            method: this.props.method,
            data: { book: params },
            success: (result) => {
                this.context.router.transitionTo(result.location);
            },
            error: (jqXHR) => {
                this.setState({
                    alerts: jqXHR.responseJSON
                });
            }
        });
    }
    render() {
        var book = this.props.book;
        var alerts;
        if (this.state.alerts.length > 0) {
            alerts = (
                <div className="alert alert-danger">
                    <ul>{this.state.alerts.map((e, i) => <li key={i}>{e}</li>)}</ul>
                </div>
            );
        }
        return (
            <div>
                {alerts}
                <form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Title</label>
                        <div className="col-sm-10">
                            <input ref="title" className="form-control" defaultValue={book ? book.title : null}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Price</label>
                        <div className="col-sm-10">
                            <input ref="price" className="form-control" defaultValue={book ? book.price : null}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button className="btn btn-primary">Create Book</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
BookForm.contextTypes = { router: React.PropTypes.func };
