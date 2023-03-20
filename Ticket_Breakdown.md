# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### **SubTask-01:** Add an ability for Facilities

**Acceptance Criteria:**
- [ ] CRUD for custom id to each Agent by Facility
- [ ] Unique custom id for different agent in a Facility
- [ ] Implement unit testing for your updates

**Story points**: 3

**Instruction:**
- Backend: Add new column "custom_id" as unique field to the `Agents` table
- Backend: Migrate the table to update `Agents` table
- Implement validation to ensure that custom ids are unique within a Facility

### **SubTask-02:** Update a report generation logic based on custom_id

**Acceptance Criteria:**
- [ ] Replace internal `id` to `custom_id` of `Agents` table in reports if custom_id exists
- [ ] User internal `id` of `Agents` table in reports if custom_id doesn't exist
- [ ] Implement unit testing

**Stroy points:** 3

**Implementation Details:**
- Modify the generateReport function to check if the Facility has assigned a custom id to the Agent and use that instead of the internal id
- Add a toggle option in the fronted page of Facilities to choose which id to use in report generation

### **SubTask-03:** Document

**Acceptance Criteria:**
- [ ] A documentation for updates

**Story Points:** 1
