class Books extends React.Component {
    render() {
        var flash = null;
        var api = { index: '/books.json' };
        if (this.props.params.id) {
            api.show = `/books/${this.props.params.id}.json`;
        }
        return (
            <div>
                {flash}
                <ReactRouter.RouteHandler params={this.props.params} api={api}/>
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
