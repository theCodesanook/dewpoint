namespace Dewpoint {
    //% block_ID = add_temp_humidity
    //% block="dewpoint of Temp = $temp Humidity = $humidity"
    export function dewpoint(temp: number, humidity: number) {
        let a = 17.271;
        let b = 237.7;
        let c = (a * temp) / (b + temp);
        let td = (b * ((Math.log(humidity / 100) + c))) / (a - ((Math.log(humidity / 100) + c)));
        return (td);
    }
}