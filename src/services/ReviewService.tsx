import { ReviewInterface } from "../interfaces/IReview";
import { UserInterface } from "../interfaces/IUser"; 
import { MovieInterface } from "../interfaces/IMovie";
import { RatingInterface } from "../interfaces/IRating";
import { GenreInterface } from "../interfaces/IGenre";


const apiUrl = "http://localhost:8080";


async function ListReviews() {
    const requestOptions = {
    method: "GET",
    headers: {
    "Content-Type": "application/json",
    },

    };


    let res = await fetch(`${apiUrl}/reviews`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
    if (res.data) {
    return res.data;
    } else {
    return false;
    }

    });

    return res;
}

async function GetReviews() {
    const requestOptions = {
    method: "GET",
    headers: {
    "Content-Type": "application/json",
    },
    
    };
    
    
    let res = await fetch(`${apiUrl}/review/:id`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
    if (res.data) {
    return res.data;
    } else {
    return false;
    }
    
    });
    
    return res;
}

async function CreateReview(data: ReviewInterface) {
    const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),

    };


    let res = await fetch(`${apiUrl}/review`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
    if (res.data) {
    return { status: true, message: res.data };
    } else {
    return { status: false, message: res.error };
    }

    });

    return res;
}

async function ListMovie() {
    const requestOptions = {
    method: "GET",
    headers: {
    "Content-Type": "application/json",
    },
    
    };
    
    
    let res = await fetch(`${apiUrl}/movies`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
    if (res.data) {
    return res.data;
    } else {
    return false;
    }
    
    });
    
    return res;
}

async function ListRating() {
    const requestOptions = {
    method: "GET",
    headers: {
    "Content-Type": "application/json",
    },
    
    };
    
    
    let res = await fetch(`${apiUrl}/ratings`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
    if (res.data) {
    return res.data;
    } else {
    return false;
    }
    
    });
    
    return res;
}

async function ListGenre() {
    const requestOptions = {
    method: "GET",
    headers: {
    "Content-Type": "application/json",
    },
    
    };
    
    
    let res = await fetch(`${apiUrl}/genres`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
    if (res.data) {
    return res.data;
    } else {
    return false;
    }
    
    });
    
    return res;
}

async function DeleteReview() {
    const requestOptions = {
    method: "DELETE",
    headers: {
    "Content-Type": "application/json",
    },
    
    };
    
    
    let res = await fetch(`${apiUrl}/reviews/:id`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
    if (res.data) {
    return res.data;
    } else {
    return false;
    }
    
    });
    
    return res;
}

async function UpdateReview() {
    const requestOptions = {
    method: "PATCH",
    headers: {
    "Content-Type": "application/json",
    },
    
    };
    
    
    let res = await fetch(`${apiUrl}/updatereview`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
    if (res.data) {
    return res.data;
    } else {
    return false;
    }
    
    });
    
    return res;
}




export {

ListReviews,
GetReviews,
CreateReview,
ListMovie,
ListGenre,
ListRating,
DeleteReview,
UpdateReview



};

