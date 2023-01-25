import random
while True:
    print("Welcome to rock, paper and scissor game!")
    player = input("Please choose between rock paper and scissor: ").lower()
    if player not in ["rock","paper","scissor"]:
        print("invalid choice!")
        continue
    computer = random.choice(["rock","paper","scissor"])
    print(f"you choose {player} and the computer choose {computer}")
    if player == computer:
        print("its a tie")
    elif player == "rock" and computer == "scissor":
        print("you win!")
    elif player == "paper" and computer == "rock":
        print("you win!")  
    elif player == "scissor" and computer == "paper":
        print("you win!")
    elif player == "rock" and computer == "paper":
        print("you lose!")
    elif player == "paper" and computer == "scissor":
        print("you lose!")  
    elif player == "scissor" and computer == "rock":   
        print("you lose!")
    else:
        print("invalid input")
    playAgain = input("do you want to play again (yes/no)").lower()
    if playAgain == "no":
        break