# 1
def remove_exclamation_marks(s):
    result = ""
    for i in s:
        if i != "!":
            result += i
    return result

# 2
def zero_fuel(distance_to_pump, mpg, fuel_left):
    max_distance = mpg * fuel_left
    return max_distance >= distance_to_pump

# 3
def distinct(seq):
    seen = set()
    result = []
    
    for num in seq:
        if num not in seen:
            seen.add(num)
            result.append(num)
    return result

# 4
def whose_move(last_player, win):
    if last_player == 'black':
        if win == False:
            return 'white'
        else:
            return 'black'
    elif last_player == 'white':
        if win == False:
            return 'black'
        else:
            return 'white'

# 5
def bmi(weight, height):
    index = weight / height**2
    
    if index <= 18.5:
        return "Underweight"
    elif index <= 25.0:
        return "Normal"
    elif index <= 30.0:
        return "Overweight"
    elif index > 30.0:
        return "Obese"