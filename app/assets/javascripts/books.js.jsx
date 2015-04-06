class Books extends React.Component {
    constructor() {
        this.state = {
            flash: null,
            flashShown: false
        };
    }
    updateFlash(message) {
        this.setState({
            flash: message,
            flashShown: false
        });
    }
    handleClickAlertClose(e) {
        this.setState({ flash: null });
    }
    componentWillReceiveProps(nextProps) {
        if (this.state.flashShown) {
            this.setState({ flash: null });
        } else {
            this.setState({ flashShown: true });
        }
    }
    render() {
        var flash;
        if (this.state.flash) {
            flash = (
                <div className="alert alert-success">
                    <button type="button" className="close">
                        <span onClick={this.handleClickAlertClose.bind(this)}>&times;</span>
                    </button>
                    {this.state.flash}
                </div>
            );
        }
        return (
            <div>
                {flash}
                <ReactRouter.RouteHandler params={this.props.params} query={this.props.query} updateFlash={this.updateFlash.bind(this)}/>
            </div>
        );
    }
}

$(() => {
    var routes = (
        <ReactRouter.Route path="/books/?" handler={Books}>
            <ReactRouter.DefaultRoute name="index" handler={BookIndex}/>
            <ReactRouter.Route name="new" handler={BookNew}/>
            <ReactRouter.Route name="show" path="/books/:id" handler={BookShow}/>
            <ReactRouter.Route name="edit" path="/books/:id/edit" handler={BookEdit}/>
        </ReactRouter.Route>
    );
    ReactRouter.run(routes, ReactRouter.HistoryLocation, (Handler, state) => {
        React.render(<Handler {...state}/>, document.getElementById('main'));
    });
});
