namespace tdewpoint {
    //% block = "dewpoint of temp = $temp humidity = $humidity"
    export function dewpoint(temp: number, humidity: number) {
        let a = 17.271;
        let b = 237.7;
        let c = (a * temp) / (b + temp);
        let td = (b * ((Math.log(humidity / 100) + c))) / (a - ((Math.log(humidity / 100) + c)));
        return (td);
    }
}
