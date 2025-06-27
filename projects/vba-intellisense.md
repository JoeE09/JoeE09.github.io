---
title: VBA IntelliSense
---
# Hero

### The Need
- VBA is widely used for Excel and Word macros, but...
- The built-in editor lacks autocomplete and navigation
- Writing and maintaining macros is slow and error-prone
- VBA code can't be run outside the built-in editor
### What I Built
- A standalone IntelliSense tool for the VBA editor
- Adds context-aware hints, autocomplete, and jump-to-definition
- Improves speed and confidence when editing VBA macros

<!-- # Links
View on GitHub
https://github.com/yourusername/vba-intellisense
FaGithub -->

# Demo className="mb-10"
- Here's a short demonstration of the IntelliSense tool in action — including launching the tray app, triggering autocomplete in the VBE editor, and exiting from the system tray.
- Autocomplete suggestions and symbol navigation inside the Visual Basic Editor (VBE)


# Two Columns

# ![Go to declaration navigation panel](/images/projectPages/vba-declaration.png)
Go to declaration navigation panel, allowing for quick navigation through the codebase

### Features
- Context-aware symbol suggestions based on scope
- Smart indexing of declarations and references across modules
- Runs as a background tray app that detects the active VBE window
- Lightweight global keyboard hook for real-time suggestions

### Technical Challenges
- **No Plugin Model:** Since there's no way to hook directly into the VBE, I had to create a lightweight window watcher that attaches to the correct COM object when the editor is in focus.
- **Raw Code Access Only:** The VBE exposes just plain text, not a code model. I developed a custom parser to extract symbols and build a searchable index of declarations and references.
- **Manual Scope Tracking:** To suggest relevant symbols, I built a line-level scope inference engine that tracks module-level vs. block-level context.
- **Input Limitations:** Since VBE doesn’t expose user input events, I used a system-level global keyboard hook to detect when the user was typing and to intercept relevant keys.
- **Symbol Database:** I designed a dynamic in-memory symbol table to store declarations and efficiently match user input with available suggestions.
- **Interop and Threading:** Working with COM safely required careful threading and error handling to avoid race conditions or application crashes.

# ![Symbol Debugger UI showing parsed symbols with details](/images/projectPages/vba-debugger.png)
Internal Symbol Debugger used to verify scope, type, and declaration line for each parsed VBA symbol

### Options Considered
- **VS Code VBA Extensions:** Rejected because they lack context awareness and cannot interact with the actual VBE runtime environment or COM object models.
- **Using Office Scripts Instead of VBA:** Powerful for online workflows, but not useful inside the local VBE editor or for realtime development productivity tools.

### Possibilities to Extend
- **Hotkey Toggle for IntelliSense:** Would allow users to disable hints temporarily, such as while writing comments or strings.
- **String-aware Suggestion Control:** Tool could detect if the user is typing inside a string and suppress suggestions accordingly.
- **Symbol Search Box:** Would be helpful to quickly find and navigate to specific symbols across all modules.
- **Docstring Integration:** Could support special comment formats to inject helpful descriptions into tooltip popovers for each symbol.
# Two Columns/

# Two Columns
# Technologies
- C#
- WinForms
- VBA / VBE
- Windows API
- COM Interop

# Skills
- Custom symbol parsing
- Extending legacy tools
- Desktop app integration
- Data indexing
- Developer productivity
- COM interop workflows

# Two Columns/