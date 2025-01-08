def add_reservation(self, bus_number):
    """Add a reservation to a vacant seat on the selected bus."""
    while True:
        print(f"\nAdding Reservation for {self.buses[bus_number]['name']}")
        self.display_bus(bus_number)
        try:
            row = int(input("Enter row number (1-5): ")) - 1
            col = int(input("Enter seat number (1-6): ")) - 1
            if 0 <= row < 5 and 0 <= col < 6:
                if self.buses[bus_number]["seats"][row][col] == "AVAILABLE":
                    customer_name = input("Enter customer name: ").strip()
                    self.buses[bus_number]["seats"][row][col] = customer_name
                    print(f"Reservation added for {customer_name} at Seat {row + 1}-{col + 1}.")
                else:
                    print("Seat already reserved.")
            else:
                print("Invalid seat selection. Please choose a valid row and seat number.")
        except ValueError:
            print("Invalid input. Please enter numeric values.")
        
        if input("Continue adding reservations? (yes/no): ").strip().lower() != 'yes':
            break
