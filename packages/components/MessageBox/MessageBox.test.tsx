import type { MessageBoxType } from "./types";
import { describe, it, expect, vi } from "vitest";
import { rAF } from "@shadow-ui/utils";
import MessageBox from "./methods";

describe("MessageBox Component", () => {
  it("renders correctly", async () => {
    const props = {
      title: "Test Title",
      message: "Test Message",
      showClose: true,
      closeOnClickModal: true,
      confirmButtonText: "Confirm",
      cancelButtonText: "Cancel",
      showConfirmButton: true,
    };

    MessageBox(props);
    await rAF();
    const header = document.querySelector(".xc-message-box__header");
    const title = document.querySelector(".xc-message-box__title");
    const message = document.querySelector(".xc-message-box__message");

    expect(title).toBeTruthy();
    expect(header).toBeTruthy();
    expect(message).toBeTruthy();

    MessageBox.close();
  });

  it("closes on close button click", async () => {
    const props = {
      title: "Test Title",
      message: "Test Message",
      showClose: true,
    };

    const doAction = vi.fn();
    MessageBox(props).catch((action) => doAction(action));
    await rAF();

    const closeBtn = document.querySelector(
      ".xc-message-box__header-btn"
    ) as HTMLButtonElement;
    closeBtn.click();

    await rAF();

    expect(doAction).toHaveBeenCalledWith("close");
  });

  it("triggers confirm action on confirm button click", async () => {
    const props = {
      title: "Test Title",
      message: "Test Message",
      showConfirmButton: true,
      showCancelButton: false,
    };

    const doAction = vi.fn();
    MessageBox(props).then((action) => doAction(action));
    await rAF();

    const confirmBtn = document.querySelector(
      ".xc-message-box__footer-btn"
    ) as HTMLButtonElement;
    confirmBtn.click();
    await rAF();

    expect(doAction).toBeCalledWith("confirm");
  });

  it("triggers cancel action on cancel button click", async () => {
    const props = {
      title: "Test Title",
      message: "Test Message",
      showConfirmButton: true,
      showCancelButton: true,
    };

    const doAction = vi.fn();
    MessageBox(props).catch((action) => doAction(action));
    await rAF();

    const cancelBtn = document.querySelector(
      ".xc-message-box__cancel-btn"
    ) as HTMLButtonElement;
    cancelBtn.click();

    await rAF();

    expect(doAction).toHaveBeenCalledWith("cancel");
  });

  it("handles input in prompt mode", async () => {
    const props = {
      title: "Test Title",
      message: "Test Message",
      boxType: "prompt" as MessageBoxType,
      showInput: true,
    };

    const doAction = vi.fn();
    MessageBox(props).then((res) => doAction(res));
    await rAF();

    const input = document.querySelector("input") as HTMLInputElement;
    input.value = "Test Input";
    input.dispatchEvent(new Event("input"));

    const confirmBtn = document.querySelector(
      ".xc-message-box__confirm-btn"
    ) as HTMLButtonElement;
    confirmBtn.click();

    await rAF();

    expect(doAction).toHaveBeenCalledWith({
      value: "Test Input",
      action: "confirm",
    });
  });
});