let bowling = {
    players: [
        { name: 'Livio', score: [] },
        { name: 'Paola', score: [] },
        { name: 'Filippo', score: [] },
        { name: 'Giuseppe', score: [] },
        { name: 'Maria', score: [] },
    ],

    addPlayer: function (newPlayer) {
        this.players.push({ name: newPlayer, score: [] });
    },

    setScores: function (scores) {

        console.log("------SCORES------");
        this.players.forEach(player => {
            for (let i = 0; i < scores; i++) {
                player.score.push(Math.floor(Math.random() * 11));
            }
            player.score.sort((a, b) => a - b);

            console.log(`${player.name}: ${player.score.join(" - ")}`);
        });

    },

    setFinalScore: function () {

        console.log("------FINAL SCORE------");
        this.players.forEach(player => {
            player.finalScore = player.score.reduce((acc, n) => acc + n, 0);

            console.log(`Final score: ${player.name} - ${player.finalScore}`);
        });
    },

    setRanking: function () {
        console.log("------RANKING------");

        this.players.sort((a, b) => b.finalScore - a.finalScore);
        this.players.forEach((player, i) => {
            console.log(`${i + 1}° ${player.name} - ${player.finalScore}`);
        });
        if (this.players[0].finalScore > this.players[1].finalScore) {
            let winner = this.players[0];
            console.log(`------WINNER------\nWinner: ${winner.name}`);
        } else {
            console.log(`------DRAW------\nDraw: ${this.players[0].name} and ${this.players[1].name} - ${this.players[0, 1].finalScore}`);
        }
    }

}

bowling.addPlayer('Giovanni');
bowling.setScores(10);
bowling.setFinalScore();
bowling.setRanking();