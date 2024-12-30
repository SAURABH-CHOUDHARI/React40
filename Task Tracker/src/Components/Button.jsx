import PropTypes from 'prop-types'

const Button = ({text ,onAdd , showAdd }) => {
    return (
        <button 
        className={` ${showAdd ? 'bg-red-600' : 'bg-green-700' } py-2 px-8 rounded-xl shadow-sm active:scale-95 border-none text-xl text-white font-medium`}
        onClick={onAdd}
        >{text}
        </button>
    )
}

Button.defaultProps = {
    text: 'Add',
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onAdd : PropTypes.func,
    showAdd : PropTypes.boolean,
}

export default Button