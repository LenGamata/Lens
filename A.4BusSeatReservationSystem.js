def manage_bus(self):
    """Ask Ticket Person which bus to manage."""
    while True:
        print("\nManage Bus")
        try:
            print("1. Bus to Manila\n2. Bus to Cebu\n3. Bus to Davao\n4. Cancel")
            bus_choice = int(input("Choose a bus to manage (1-3) or 4 to cancel: "))
            if 1 <= bus_choice <= 3:
                bus_number = bus_choice - 1
                print(f"\nYou are managing: {self.buses[bus_number]['name']}")
                # Further actions like adding/removing reservations can be placed here
                return bus_number
            elif bus_choice == 4:
                print("Returning to main menu.")
                return None
            else:
                print("Invalid choice. Please select between 1 and 4.")
        except ValueError:
            print("Invalid input. Please enter a number.")
