def customer_menu(self):
    """Display customer menu to reserve or cancel reservations."""
    while True:
        print("\nCustomer Menu:")
        print("1. Reserve a Seat")
        print("2. Cancel Reservation")
        print("3. Cancel (Exit)")

        choice = input("Please select an option (1-3): ").strip()
        
        if choice == '1':
            self.reserve_seat()
        elif choice == '2':
            self.cancel_reservation()
        elif choice == '3':
            print("Exiting to main menu.")
            break
        else:
            print("Invalid choice. Please select a valid option.")
