import { RatingInterface } from "./IRating";
import { GenreInterface } from "./IGenre";
import { UserPreferences } from "typescript";
import { MovieInterface } from "./IMovie";
import { UserInterface } from "./IUser";

export interface ReviewInterface{
    ID?:number;
    ReviewText?: string;
	DateTime?: string;
    
    UserID?:number;
	User?:UserInterface;

	MovieID?:number;
	Movie?: MovieInterface;

	RatingID?:number;
	Rating?:RatingInterface;

	GenreID?:number;
 	Genre?:GenreInterface;






}