def cancel_reservation(self):
    """Cancel an existing reservation."""
    self.display_buses()  # Show available buses
    
    try:
        bus_choice = int(input("Which bus did you reserve on (1-3): ")) - 1
        if bus_choice < 0 or bus_choice > 2:
            print("Invalid bus selection.")
            return
        
        customer_name = input("Enter your name to cancel the reservation: ").strip()
        bus = self.buses[bus_choice]
        found = False
        
        # Search for the customer in the bus reservation list
        for row in range(len(bus["seats"])):
            for col in range(len(bus["seats"][row])):
                if bus["seats"][row][col] == customer_name:
                    found = True
                    print(f"Found reservation for {customer_name} at Seat {row + 1}-{col + 1}.")
                    break
            if found:
                break
        
        if found:
            confirmation = input(f"Are you sure you want to cancel {customer_name}'s reservation? (yes/no): ").strip().lower()
            if confirmation == 'yes':
                bus["seats"][row][col] = "AVAILABLE"
                print(f"Reservation for {customer_name} has been canceled.")
        else:
            print("No reservation found for this name.")
    except ValueError:
        print("Invalid input. Please select a valid bus number.")
