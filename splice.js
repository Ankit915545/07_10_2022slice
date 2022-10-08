function splice()
{
    const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
    const new_arr=foods.splice(2,0,"noodles","icecream");
    console.log(foods)
    document.write(foods)
}
splice();