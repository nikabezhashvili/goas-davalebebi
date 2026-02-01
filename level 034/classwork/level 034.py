# 1
def greet(name):
    print("Hello World!")
    print(f"Hello {name}")

greet('nika')

# 2
def double(num):
    num = num**2
    return num
print(double(5))

# 3
def checkodd(num):
    if num % 2 == 0:
        return "ლუწი"
    else:
        return "კენტი"
print(checkodd(4))
print(checkodd(7))

# 4
def bmi(height, weight):
    index = weight / (height * height)
    return index
print(bmi(1.63, 65))