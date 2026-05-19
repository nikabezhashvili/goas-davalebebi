# 1. ასაკის სარკე
age = int(input("Enter age: "))
print(age > 18)
print(type(age))

# 2. ორი რიცხვის დუელი
a = float(input("Enter first number: "))
b = float(input("Enter second number: "))
print("Sum:", a+b, type(a+b))
print("Product:", a*b, type(a*b))
print("Is a > b?", a > b)

# 3. სიმართლის თამაში
x = int(input("Enter first number: "))
y = int(input("Enter second number: "))
print("x > y:", x > y)
print("Both positive:", x > 0 and y > 0)

# 4. სახელისა და ასაკის კონტრაქტი
name = input("Enter name: ")
age = int(input("Enter age: "))
print(f"User {name} is adult: {age >= 21}")

# 5. კალკულატორი, რომელიც ფიქრობს
n1 = float(input("Enter first number: "))
n2 = float(input("Enter second number: "))
res = n1 / n2
print("Result:", res, type(res))
print("Is integer?", res.is_integer())

# 6. სიმაღლის გამოცანა
h_cm = float(input("Enter height in cm: "))
h_m = h_cm / 100
print("Taller than 1.75?", h_m > 1.75)

# 7. რიცხვის ხასიათი
num = int(input("Enter number: "))
print("Positive:", num > 0)
print("Negative:", num < 0)
print("Zero:", num == 0)

# 8. სტრინგი რიცხვის წინააღმდეგ
val = input("Enter number: ")
print("Type before:", type(val))
val_int = int(val)
print("Type after:", type(val_int))
print("Greater than 100:", val_int > 100)

# 9. საშუალო არ არის უბრალოდ რიცხვი
n1 = float(input("Enter first: "))
n2 = float(input("Enter second: "))
n3 = float(input("Enter third: "))
avg = (n1+n2+n3)/3
print("Average:", avg, type(avg))
print("Average > 50:", avg > 50)
