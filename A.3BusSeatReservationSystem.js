class BusSeatReservationSystem:
    def __init__(self):
        
        self.ticket_persons = {"user1": "pass123", "admin": "adminpass"}  # Dictionary for user auth
        self.buses = [
            {"name": "Bus to Manila", "seats": [["AVAILABLE" for _ in range(6)] for _ in range(5)]},
            {"name": "Bus to Cebu", "seats": [["AVAILABLE" for _ in range(6)] for _ in range(5)]},
            {"name": "Bus to Davao", "seats": [["AVAILABLE" for _ in range(6)] for _ in range(5)]}
        ]  # List of buses with names and seat arrangements
        self.passengers = {}  # Dictionary to store passenger info: {(bus_number, row, col): "Customer Name"}

    def authenticate_ticket_person(self, username, password):
        """Authenticate the ticket person."""
        return self.ticket_persons.get(username) == password

    def display_bus(self, bus_number):
        """Display the seat layout for a specific bus."""
        print(f"\nSeat Layout for {self.buses[bus_number]['name']}:")
        for row_idx, row in enumerate(self.buses[bus_number]["seats"]):
            print(f"Row {row_idx + 1}: " + " | ".join(row))
        print("\n")

    def reserve_seat(self, bus_number, row, col, customer_name):
        """Reserve a seat for a customer."""
        if 0 <= row < 5 and 0 <= col < 6:
            if self.buses[bus_number]["seats"][row][col] == "AVAILABLE":
                self.buses[bus_number]["seats"][row][col] = f"Seat {row + 1}-{col + 1}"
                self.passengers[(bus_number, row, col)] = customer_name
                print(f"Seat reserved successfully for {customer_name}!")
            else:
                print("Seat already reserved.")
        else:
            print("Invalid seat number.")

    def view_passenger_list(self, bus_number):
        """Display passenger list for a specific bus."""
        print(f"\nPassenger List for {self.buses[bus_number]['name']}:")
        for row in range(5):
            for col in range(6):
                seat_status = self.passengers.get((bus_number, row, col), "AVAILABLE")
                print(f"Seat {row + 1}-{col + 1}: {seat_status}")
        input("\nPress Enter to return to the previous menu...")

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
                    customer_name = input("Enter customer name: ")
                    if 0 <= bus_number < 3:
                        self.reserve_seat(bus_number, row, col, customer_name)
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
                print("3. View Passenger List")
                print("4. Logout")
                choice = input("Choose an option (1-4): ")
                if choice == '1':
                    for i in range(3):
                        self.display_bus(i)
                elif choice == '2':
                    self.manage_bus()
                elif choice == '3':
                    try:
                        bus_number = int(input("Enter bus number (1-3): ")) - 1
                        if 0 <= bus_number < 3:
                            self.view_passenger_list(bus_number)
                        else:
                            print("Invalid bus number.")
                    except ValueError:
                        print("Invalid input. Please enter a number.")
                elif choice == '4':
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


reservation_system = BusSeatReservationSystem()
reservation_system.main()
