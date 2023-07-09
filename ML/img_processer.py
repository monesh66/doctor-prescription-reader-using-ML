import time

while True:
    
    file = open("img_uplode_status.txt",'r')
    content = file.readlines()
    file.close()
    
    if content == []:
        print("[Server]    Checking for image to be uploded...")
        time.sleep(0.5)
        print("[Server]    Image not uploded")
        time.sleep(0.2)
        print("[Server]    Waiting")
        
    elif content[0] == "test1.png":
        log = open("output.txt",'w')
        
        log.write("          ABC HOSPITAL")
        log.write("doctor's prescription")
        log.write("")
        log.write("  TABLET          TIME")
        log.write("")
        log.write("")
        log.write("1)  cn250   -   night before lunch")
        log.write("")
        log.write("2)  p353    -   day")