from turtle import*
# 1
# input - შემავალ ინფორმაციას
# output - გამომავალი ინფორმაცია

user_name = input("შეიყვანეთ თქვენი სახელი:")
print("გამარჯობა" + user_name )

# 2
# კონკატინაცია ვუწოდებთ ისეთ მოვლენას როდესაც სტრინგებს ვამატებთ ერთმანეთს
# 3
user_value = input("შეიყვანეთ რაიმე მნიშვნელობა ")
print("თქვენ შეიყვანეთ:" + user_value)
# 4
first_name = input("შეიყვანეთ თქვენი სახელი: ")
last_name = input("შეიყვანეთ თქვენი გვარი: ")
age = input("შეიყვანეთ თქვენი ასაკი: ")
city = input("შეიყვანეთ თქვენი საცხოვრებელი ადგილი: ")
favorite_color = input("შეიყვანეთ თქვენი საყვარელი ფერი: ")
favorite_car = input("შეიყვანეთ თქვენი საყვარელი მანქანა: ")

print(first_name +" "+ last_name +" "+ age +" "+ city +" "+ favorite_color +" "+ favorite_car )
# 5


# 1/5
num_str1 = "10"
num_int1 = int(num_str1) 
print(num_int1, type(num_int1)) 

# 2/5
num_str2 = "25"
num_int2 = int(num_str2)  
print(num_int2, type(num_int2)) 

# 3/5
num_str3 = "100"
num_int3 = int(num_str3)  
print(num_int3, type(num_int3)) 

# 4/5
num_str4 = "0"
num_int4 = int(num_str4)  
print(num_int4, type(num_int4))  

# 5/5
num_str5 = "5"
num_int5 = int(num_str5)  
print(num_int5, type(num_int5))  

# 6


# 1/5
num1 = 42
num1 = str(num1)
print(num1, type(num1))  

# 2/5
num2 = -7
num2 = str(num2)
print(num2, type(num2))  

# 3/5
num3 = 0
num3 = str(num3)
print(num3, type(num3))  

# 4/5
num4 = 999
num4 = str(num4)
print(num4, type(num4))  

# 5/5
num5 = 15
num5 = str(num5)
print(num5, type(num5))  

# 6
user_input = input("შემოიტანეთ რიცხვი: ")

# 
number = int(user_input)


result = number + 15

print (result)