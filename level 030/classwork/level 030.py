# 1
name = input('enter your name: ')
print(name.upper())

# 2
name = input('enter your name: ')
print(name.lower())

# 3
name = input('enter your name: ')
print(name.capitalize())

# 4
word = "hello"
symbol = input("შეიყვანე სიმბოლო: ")

index = word.find(symbol)

if index != -1:
    print(f"{symbol} - {index}")
else:
    print("This symbol is not in word")

# 5
name = 'nika'
print(len(name))

# 6
name = input("შეიყვანე სახელი: ").lower()

if name.startswith("g"):
    print("The name starts with 'g'")
else:
    print("The name does not start with 'g'")

# 7

name = input("შეიყვანე სახელი: ").lower()

if name.endswith("l"):
    print("The name ends with 'l'")
else:
    print("The name does not end with 'l'")