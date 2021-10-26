const Header = ({title}) => {
    return (
        <header>
            <h1>Task {title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',

}

export default Header
