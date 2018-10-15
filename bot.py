commands = ["help","likebot","dislikebot","pflikebot","pfdislikebot"]
def parse(cmd):
  if cmd not in commands:
    print("Invalid command. Type help for a list of commands")
  else:
    
def main():
  print("Camden's 2.11 Likebot")
  print("Type help for a list of commands")
  result = input(">>>")
  parse(result)
