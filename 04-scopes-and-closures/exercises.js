function exercise2() {
    function countDown() {
        for (let i = 3; i >= 0; i--) {
            setTimeout(function() {
                console.log(i || "Lift-off!");
            }, (3 - i) * 1000);
        }
    }

    countDown();
}

function exercise3() {
    function countDown(number) {
        if (number < 0) {
            return;
        }

        console.log(number || "Lift-off!");
        setTimeout(countDown, (3 - number) * 1000, --number);
    }

    countDown(3);
}

function exercise4() {
    function findHighScore(scores) {
        return Math.max(...scores);
    }

    let arr = [1, 5, 4, 9, 0];
    console.log(findHighScore(arr));
}

function exercise5() {
    function getCommentByScore(score) {
        if (score < 5) {
            return 'Awful score...';
        }

        if (score > 20) {
            return 'Great score!';
        }

        if (score > 10) {
            return 'Good score';
        }

        return 'Okay score';
    }

    function judgeScore(score) {
        const comment = getCommentByScore(score);
        return `We have judged your score to be: ${comment}`;
    }

    console.log(judgeScore(4));
    console.log(judgeScore(8));
    console.log(judgeScore(12));
    console.log(judgeScore(23));
}

// exercise2();
// exercise3();
// exercise4();
exercise5();
