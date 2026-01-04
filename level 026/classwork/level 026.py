# 1
numbers = [10, 20, 30, 40, 50]

total = 0      
count = 0     

for num in numbers:
    total += num   
    count += 1     

average = total / count   

print("ჯამი:", total)
print("საშუალო არითმეტიკული:", average)
# 2
snum = 7
while True:
    num = int(input('Enter number: '))
    if num == snum:
        print('You guessed the number!')
        break

# 3
while True:
    num = int(input('Enter a number: '))
    if num % 2 == 0:
        print('You entered an even number:', num)
        break
    else:
        print('The number is odd, please try again.')
