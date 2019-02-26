import $ from 'jquery';

export const fetchScore = () => {
    return $.ajax({
        method: 'get',
        url: 'https://hoarder-4a2f3.firebaseio.com/.json',
    })
}

export const postScore = (name, score) => {
    return $.ajax({
        method: 'post',
        url: 'https://hoarder-4a2f3.firebaseio.com/.json',
        data: JSON.stringify({
            "name": `${name}`,
            "score": score
          })
    })
}