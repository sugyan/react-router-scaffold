class Pagination extends React.Component {
    handleClickPage(page, e) {
        e.preventDefault();
        this._transitionToPage(page);
    }
    makeHref(page) {
        var args = this._makeArguments(page);
        return this.context.router.makeHref.apply(this, args);
    }
    _makeArguments(page) {
        var routes = this.context.router.getCurrentRoutes();
        var params = this.context.router.getCurrentParams();
        var query = React.addons.update(this.context.router.getCurrentQuery(), {
            page: { $set: page }
        });
        var name = routes[routes.length - 1].name;
        return [name, params, query];
    }
    _transitionToPage(page) {
        if (page < 1 || page > this.props.total) {
            return;
        }
        var args = this._makeArguments(page);
        this.context.router.transitionTo.apply(this, args);
    }
    render() {
        var current = this.props.current;
        var prev = (
            <li className={!this.props.prev ? "disabled" : null}>
                <a href={!this.props.prev ? null : this.makeHref(current - 1)} onClick={this.handleClickPage.bind(this, current - 1)} aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
        );
        var next = (
            <li className={!this.props.next ? "disabled" : null}>
                <a href={!this.props.next ? null : this.makeHref(current + 1)} onClick={this.handleClickPage.bind(this, current + 1)} aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        );
        var pages = [
            <li key="current" className="active">
                <a>{this.props.current}</a>
            </li>
        ];
        if (this.props.current) {
            [1, 2, 3].forEach((e) => {
                var page = this.props.current - e;
                if (page > 0) {
                    pages.unshift(
                        <li key={page}>
                            <a href={this.makeHref(page)} onClick={this.handleClickPage.bind(this, page)}>{page}</a>
                        </li>
                    );
                }
            });
            [1, 2, 3].forEach((e) => {
                var page = this.props.current + e;
                if (page <= this.props.total) {
                    pages.push(
                        <li key={page}>
                            <a href={this.makeHref(page)} onClick={this.handleClickPage.bind(this, page)}>{page}</a>
                        </li>
                    );
                }
            });
        }
        return (
            <div className="text-center">
                <ul className="pagination">
                    {prev}
                    {pages}
                    {next}
                </ul>
            </div>
        );
    }
}
Pagination.contextTypes = { router: React.PropTypes.func };
