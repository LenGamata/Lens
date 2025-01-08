def display_seats(self, bus_choice):
    """Display the available seats for a selected bus."""
    bus = self.buses[bus_choice]
    seats = bus["seats"]
    fully_booked = True
    
    for row in range(len(seats)):
        for col in range(len(seats[row])):
            if seats[row][col] == "AVAILABLE":
                print(f"Seat {row + 1}-{col + 1}: AVAILABLE")
                fully_booked = False
    
    if fully_booked:
        print("Fully Booked")
        return
    
    # Ask for seat selection if not fully booked
    row = int(input("Enter row number (1-5): ")) - 1
    col = int(input("Enter seat number (1-6): ")) - 1
    if seats[row][col] == "AVAILABLE":
        customer_name = input("Enter your name: ").strip()
        seats[row][col] = customer_name
        print(f"Congratulations! {customer_name} has reserved Seat {row + 1}-{col + 1}.")
    else:
        print("Sorry, this seat is already taken.")
