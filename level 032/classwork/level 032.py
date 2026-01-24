# 1
list = [1, 2, 3, 4, 5]
print(len(list))

# 2
names = ["Nika", "Luka", "Mari", "Giorgi", "Saba"]
inpu = input("Enter a name: ")
names.append(inpu)

# 3

names = ["Nika", "Luka", "Mari", "Giorgi", "Saba"]
names.insert(3, "Tarieli")

# 4

names = ["Nika", "Luka", "Mari", "Giorgi", "Saba"]
names.pop(3)

# 5

names = ["Nika", "Luka", "Mari", "Giorgi", "Saba"]
names.remove("Nika")

# 6
names = ["Nika", "Luka", "Mari", "Giorgi", "Saba"]
a = input("Enter a name: ")
if a in names:
    print(names.index(a))
else:
    print("not index in list")
# 7
numbers = [1, 2, 3, 4, 5]
for i in range(5):
    num = int(input("Enter a number: "))
    numbers.append(num)
print(numbers)
