export function emitValue({ target }) {
  if (target.value === "") {
    if (this.value !== null) this.$emit("input", null);
  } else if (target.value !== this.value) this.$emit("input", target.value);
}

export function trimValue({ target }) {
  const trimmed = target.value.trim();
  if (trimmed === "") {
    if (this.value !== null) this.$emit("input", null);
  } else if (trimmed !== this.value) this.$emit("input", trimmed);
}
