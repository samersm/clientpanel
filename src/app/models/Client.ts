export interface Client{
    // Using (?) Symbol to make it unrequired
    $key?:string;
    firstName?:string;
    lastName?:string;
    email?:string;
    phone?:string;
    balance?:number;
}
