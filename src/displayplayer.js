import { players } from "./players";

function DisplayPlayer({ playerId }) {
  const player = players.find((player) => player.id === playerId);

  return (
    <section className="w-1140px">
      {player ? (
        <>
          <h2>
            {player.firstname} {player.lastname} ({player.age})
          </h2>
          <img
            className="player-img"
            src={player.img}
            alt={`${player.firstname} ${player.lastname}`}
          />
          <p>
            <b>Club</b>: {player.club}
          </p>
          <p>
            <b>Nationality</b>: {player.nationality}
          </p>
          <p>
            <b>Trophies</b>: {player.trophies}
          </p>
          <p>
            <b>Bio</b>: {player.bio}
          </p>
        </>
      ) : (
        <p>Player not found.</p>
      )}
    </section>
  );
}

export default DisplayPlayer;
