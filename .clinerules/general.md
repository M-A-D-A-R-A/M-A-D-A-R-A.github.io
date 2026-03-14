# Cline Command Execution Rules

## Purpose

These rules define restrictions on shell commands executed by the Cline agent to prevent destructive or unsafe operations on the host machine, infrastructure, or external services.

The agent **must validate every command before execution**.
If a command matches any blocked pattern, execution **must be denied immediately**.

---

# Blocked Command Categories

## 1. Privilege Escalation

Commands that attempt to gain elevated privileges are strictly forbidden.

Blocked patterns:

* `sudo`
* `su`

Reason: Prevents unauthorized system-level modifications.

---

## 2. File Deletion

Commands that delete files or directories are restricted.

Blocked patterns:

* `rm`
* `rm -rf`
* recursive deletion operations

Reason: Prevents accidental or malicious file loss.

---

## 3. Process Termination

Commands that terminate running processes are not allowed.

Blocked patterns:

* `kill`
* `pkill`
* `killall`

Reason: Prevents disruption of system services or development tools.

---

## 4. Shell Trampolines

Commands that spawn nested shell execution environments are blocked.

Blocked patterns:

* `bash -c`
* `sh -c`
* `zsh -c`

Reason: These commands can bypass safety filters.

---

## 5. Code Execution via Eval

Dynamic code evaluation commands are not allowed.

Blocked patterns:

* `eval`

Reason: Prevents arbitrary code execution.

---

## 6. Subshell Execution

Subshell invocation is restricted.

Blocked patterns:

* `$(`

Reason: Prevents bypassing command validation through nested execution.

---

## 7. System Service Manipulation

Commands that start, stop, or restart system services are blocked.

Blocked patterns:

* `systemctl restart`
* `systemctl stop`
* `systemctl start`

Reason: Prevents modification of host system services.

---

## 8. Cloud Infrastructure Mutation

Commands that mutate infrastructure resources are not allowed.

Blocked patterns:

* `aws create`
* `aws delete`
* `aws update`
* `aws put`
* `aws run`
* `aws start`
* `aws stop`
* `aws terminate`
* `aws reboot`

Reason: Prevents unintended changes to cloud infrastructure.

---

# Additional Recommended Restrictions

## Disk Modification

Block commands capable of modifying disk partitions or filesystems.

Examples:

* `dd if=`
* `mkfs`
* direct writes to `/dev/sd*`

---

## Unsafe Permission Changes

Block dangerous permission changes.

Examples:

* `chmod 777`
* recursive ownership changes to root

---

## Command Chaining

Block multi-command chaining.

Examples:

* `&&`
* `||`
* `;`

Reason: Prevents combining safe and unsafe commands to bypass filters.

---

# Enforcement

Before executing any shell command, the agent must:

1. Inspect the command string.
2. Compare it against all blocked patterns.
3. Reject execution if a match is found.
4. Return the corresponding rule violation reason.

Example rejection message:

```
Execution denied: rule violation (sudo blocked)
```

---

# Security Principle

The Cline agent should follow a **default-safe execution model**:

* Allow only safe development commands.
* Block commands capable of modifying system state, infrastructure, or data.

When in doubt, **deny execution**.
