# 2
num = float(input('Enter num: '))
if num < 0: 
    print('The num is negative')
elif num > 0:
    if num % 2 == 0:
        print("The number is positive and even.")
    else:
        print("The number is positive and odd.")
else:
    print('the num is 0')
# 3
total = 0
num = 0

while num >= 0:
    num = int(input('Enter number: '))
    if num >= 0:
        total += num
print('sum', total)

# 4
pin = '1234'
user_try = input('Enter pin: ')
if user_try == pin:
    print('access granted')
else:
    user_try = input('Enter pin: ')
    if user_try == pin:
        print('access granted')
    else:
        user_try = input('Enter pin: ')
        if user_try == pin:
            print('access granted')
        else:
            print('access denied')

# 5
fruits = ["ვაშლი", "ბანანი", "ატამი", "მსხალი", "ალუბალი"]
print(fruits[2])

# 6
numbers = [10, 20, 30, 40, 50]
numbers[1] = 25
print(numbers)

# 7

index = int(input("შეიყვანე ინდექსი (0-დან 4-მდე): "))
colors = ["წითელი", "მწვანე", "ლურჯი", "ყვითელი", "იასამნისფერი"]
print(colors[index])

# 8
animals = ["ძაღლი", "კატა", "სპილო", "ვეფხვი", "ლომი"]
animals[4] = 'გემი'
print(animals)

# 9

index = int(input('enter index: '))
color = input('enter color: ')
colors = ["თეთრი", "შავი", "ნარინჯისფერი", "ვარდისფერი"]
colors[index] = color
print(colors)
