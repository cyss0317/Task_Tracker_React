import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    return (
        <header className="header">
            <h1>Task {title}</h1>
            <Button color="green" text="text" />
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
