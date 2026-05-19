# 1

positive = 0
negative = 0

for i in range(5):
    num = int(input("შეიყვანე რიცხვი: "))

    if num > 0:
        positive += 1
    elif num < 0:
        negative += 1

print("დადებითი:", positive)
print("უარყოფითი:", negative)

# 2

n = int(input("შეიყვანე რიცხვი: "))

total = 0

for i in range(1, n + 1):
    if i % 2 == 0:
        total += i

print(total)

# 3

secret = 7

guess = int(input("გამოიცანი რიცხვი: "))

if guess == secret:
    print("სწორია")
else:
    print("არასწორია")



# 4

num1 = float(input("შეიყვანე პირველი რიცხვი: "))
num2 = float(input("შეიყვანე მეორე რიცხვი: "))
num3 = float(input("შეიყვანე მესამე რიცხვი: "))

average = (num1 + num2 + num3) / 3

print("საშუალო:", average)

if average > 50:
    print("Passed")
else:
    print("Failed")


# 5

for i in range(1, 21):
    if i % 3 == 0:
        print("Fizz")
    else:
        print(i)


# 6

num = int(input("შეიყვანე დადებითი რიცხვი: "))

while num < 0:
    num = int(input("უარყოფითია, თავიდან შეიყვანე: "))

print("სწორია:", num)


# 7

even = 0
odd = 0

for i in range(6):
    num = int(input("შეიყვანე რიცხვი: "))

    if num % 2 == 0:
        even += 1
    else:
        odd += 1

print("ლუწი:", even)
print("კენტი:", odd)


# 8

largest = int(input("შეიყვანე რიცხვი: "))

for i in range(4):
    num = int(input("შეიყვანე რიცხვი: "))

    if num > largest:
        largest = num

print("ყველაზე დიდი:", largest)