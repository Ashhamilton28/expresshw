const React = require('react')

function Show(props){
    
    const {marioCharacter} = props
    console.log(marioCharacter)
    return (
        <div>
            <h1>Mario Characters Show Page</h1>

            <p>The {marioCharacter.name} is {marioCharacter.color} {' '}
            {marioCharacter.canUsePowerUps ? 'can use power-ups': 'Can not use power ups'}
            </p>
        </div>
    )
}

 module.exports  = Show;