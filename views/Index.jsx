const React = require("react");

function Index(props) {
  const { mario } = props;

  return (
    <div>
      <h1>Index Page</h1>
      <ul>
        {mario.map((mario, i) => {
          return (
            <li>
              <a href={`/mario/${i}`}>{mario.name}</a> is {mario.color} and {
             mario.canUsePowerUps ?  ` can use power-ups`
              : `can not use power-ups`
            
            }
            </li>
          );
        })}
      </ul>
    </div>
  );
}

module.exports = Index;