import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd , showAdd }) => {
    return (
        <header className='flex items-center justify-between pt-10 '>
            <h1 className='text-4xl font-bold text-zinc-800'>{title}</h1>
            <Button onAdd={onAdd} showAdd={showAdd} text={showAdd ? 'Close' : 'Add'}/>
            
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onAdd : PropTypes.func ,
    showAdd: PropTypes.boolean ,
}

export default Header