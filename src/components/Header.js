import PropTypes from 'prop-types'


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

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//CSS in js
// const headingStyle = {
//     color: "blue",
//     backgroundColor: "yellow"
// }

export default Header
