# 1
def simple_multiplication(number) :
    if number % 2 == 0:
        return number * 8
    else:
        return number * 9

# 2
def get_grade(s1, s2, s3):
    a = (s1 + s2 + s3)/ 3
    if 90<= a <=100:
        return 'A'
    elif 80 <= a < 90: 
        return 'B'
    elif 70 <= a < 80:
        return 'C'
    elif 60 <= a < 70:
        return 'D'
    else:
        return 'F'

# 3
a = "code"
b = "wa.rs"
name = a + b

# 4
def mouth_size(animal): 
    if animal.lower() == 'alligator':
        return 'small'
    else:
        return 'wide'