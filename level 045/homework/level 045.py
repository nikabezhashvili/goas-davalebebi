# 1
def square_or_square_root(arr):
    arr1 = []
    for x in arr:
        y = int(x ** 0.5)
        if y * y == x:
            arr1.append(y)
        else:
            arr1.append(x * x)
    return arr1

# 2
def sum_mix(arr):
    sum = 0
    for i in arr:
        sum += int(i)
    return sum

# 3
def logical_calc(array, op):
    if op == "AND":
        x = True
        for i in array:
            x = x and i
        return x
    
    elif op == "OR":
        x = False
        for i in array:
            x = x or i
        return x
    
# რა მეშველებოდა ეს რომ არა https://www.w3schools.com/python/python_operators_bitwise.asp

    elif op == "XOR":
        x = False
        for i in array:
            x = x ^ i
        return x
    
# 4
def calculator(x, y, op):
    if type(x) == str or type(y) == str:
        return "unknown value"
    elif op == '+':
        return x + y
    elif op == '-':
        return x - y
    elif op == '*':
        return x * y
    elif op == '/':
        return x / y

    else:
        return "unknown value"


# 5

def count_sheep(n):
    result = ''
    
    for i in range(1, n + 1):
        result += f"{i} sheep..."
    return result