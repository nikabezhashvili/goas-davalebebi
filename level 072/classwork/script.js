// 1 

let thermometer = {
    _celsius: 20,
    get fahrenheit(){
        return this._celsius * 1.8 + 32
    },
    set fahrenheit(f){
        return this._celsius = (f - 32) / 1.8;
    }
}
