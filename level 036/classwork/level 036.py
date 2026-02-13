# 1
def Arithmetic(num1,num2,num3,num4,num5):
    arit = (num1 + num2 + num3 + num4 + num5)/5
    return arit

print(Arithmetic(2,3,4,5,6))

# 2
def sayHi(name = 'guest'):
    print('hello ',name)

sayHi( 'nika')
sayHi()

# 3
def upname(name):
    return name.upper()

print(upname('nika'))