const React = require('react');


function New(){
    return(
        <div>
            <h1>Add a Mario Character here!</h1>

            <form action='/mario' method="POST">

                Name:<input type="text" name ="name"/>
                <br/>

                Color: <input type="text" name="color" />
                <br/>

                Can use Power-ups?: <input type="checkbox" name ="canUsePowerUps"
                />
                 <br/>
                 
                 <input type="submit" value="Add a character" />

            </form>
        </div>
    )
}

module.exports = New