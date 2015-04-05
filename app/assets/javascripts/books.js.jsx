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
          <ReactRouter.DefaultRoute name="index" handler={BookIndex}/>
          <ReactRouter.Route name="new" handler={BookNew}/>
          <ReactRouter.Route name="show" path="/books/:id" handler={BookShow}/>
          <ReactRouter.Route name="edit" path="/books/:id/edit" handler={BookEdit}/>
        </ReactRouter.Route>
    );
    ReactRouter.run(routes, ReactRouter.HistoryLocation, (Handler) => {
        React.render(<Handler/>, document.getElementById('main'));
    });
});
