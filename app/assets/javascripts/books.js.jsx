class Books extends React.Component {
    render() {
        var flash = null;
        return (
            <div>
                {flash}
                <ReactRouter.RouteHandler/>
            </div>
        );
    }
}

$(() => {
    var routes = (
        <ReactRouter.Route path="/books/?" handler={Books}>
          <ReactRouter.DefaultRoute name="index" handler={IndexBooks}/>
          <ReactRouter.Route name="new" handler={NewBook}/>
          <ReactRouter.Route name="show" path="/books/:id" handler={ShowBook}/>
          <ReactRouter.Route name="edit" path="/books/:id/edit" handler={EditBook}/>
        </ReactRouter.Route>
    );
    ReactRouter.run(routes, ReactRouter.HistoryLocation, (Handler) => {
        React.render(<Handler/>, document.getElementById('main'));
    });
});
