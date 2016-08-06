/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { BooksComponent } from './books.component';

describe('Component: Books', () => {
  it('should create an instance', () => {
    let component = new BooksComponent();
    expect(component).toBeTruthy();
  });
});
