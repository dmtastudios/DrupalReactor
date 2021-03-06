import PropTypes from 'prop-types'
const Header = () =>
{
  return (
          <header>
          <h1 style={{color:'red', backgroundColor:'black'}}
          >{title}</h1>
          </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}


export default Header