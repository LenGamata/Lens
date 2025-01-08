class BusSeatReservationSystem:
    def __init__(self):
        # Data structures
        self.ticket_persons = {"user1": "pass123", "admin": "adminpass"}  # Dictionary for user auth
        self.buses = [  # Array representing buses, each with a max capacity of 30 seats
            [["Available" for _ in range(6)] for _ in range(5)] for _ in range(3)
        ]  # 3 buses, each with 5 rows and 6 seats per row

    def authenticate_ticket_person(self, username, password):
        """Authenticate the ticket person."""
        return self.ticket_persons.get(username) == password

    def display_bus(self, bus_number):
        """Display the seat layout for a specific bus."""
        print(f"\nCurrent Seat Layout for Bus {bus_number + 1}:")
        for row in self.buses[bus_number]:
            print(" | ".join(row))
        print("\n")

    def reserve_seat(self, bus_number, row, col):
        """Reserve a seat on a specific bus."""
        if 0 <= row < 5 and 0 <= col < 6:
            if self.buses[bus_number][row][col] == "Available":
                self.buses[bus_number][row][col] = "Reserved"
                print("Seat reserved successfully!")
            else:
                print("Seat already reserved.")
        else:
            print("Invalid seat number.")

    def manage_bus(self):
        """Manage bus menu for ticket person."""
        while True:
            print("\nMANAGE BUS")
            print("1. View Bus Seats")
            print("2. Reserve a Seat on a Bus")
            print("3. Exit to Main Menu")
            choice = input("Choose an option (1-3): ")
            if choice == '1':
                try:
                    bus_number = int(input("Enter bus number (1-3): ")) - 1
                    if 0 <= bus_number < 3:
                        self.display_bus(bus_number)
                    else:
                        print("Invalid bus number.")
                except ValueError:
                    print("Invalid input. Please enter a number.")
            elif choice == '2':
                try:
                    bus_number = int(input("Enter bus number (1-3): ")) - 1
                    row = int(input("Enter row number (1-5): ")) - 1
                    col = int(input("Enter seat number (1-6): ")) - 1
                    if 0 <= bus_number < 3:
                        self.reserve_seat(bus_number, row, col)
                    else:
                        print("Invalid bus number.")
                except ValueError:
                    print("Invalid input. Please enter numbers.")
            elif choice == '3':
                break
            else:
                print("Invalid choice. Please try again.")

    def ticket_person_interface(self):
        """Ticket person authentication and menu."""
        username = input("Username: ")
        password = input("Password: ")
        if self.authenticate_ticket_person(username, password):
            print("Access granted!")
            while True:
                print("\nTICKET PERSON MENU")
                print("1. View Buses")
                print("2. Manage Bus")
                print("3. Logout")
                choice = input("Choose an option (1-3): ")
                if choice == '1':
                    for i in range(3):
                        self.display_bus(i)
                elif choice == '2':
                    self.manage_bus()
                elif choice == '3':
                    break
                else:
                    print("Invalid choice.")
        else:
            print("Invalid credentials.")

    def main(self):
        """Main function for user selection."""
        while True:
            user_type = input("Are you a TICKET PERSON or CUSTOMER? ").strip().lower()
            if user_type == "ticket person":
                self.ticket_person_interface()
            elif user_type == "customer":
                print("Customer functionality under separate development.")
            else:
                print("Invalid choice.")
            if input("Restart program? (yes/no): ").strip().lower() != 'yes':
                print("Thank you for using the system!")
                break


# Instantiate and run the system
reservation_system = BusSeatReservationSystem()
reservation_system.main()
