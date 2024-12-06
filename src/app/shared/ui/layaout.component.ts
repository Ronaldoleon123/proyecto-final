import { Component, inject } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { AuthStateService } from "../data-access/auth-state.service";

@Component({
    standalone: true,
    imports: [RouterModule],
    selector: 'app-layout',
    template: `
    <header
      style="
        height: 80px;
        margin-bottom: 2rem;
        width: 100%;
        max-width: 1280px;
        margin-left: auto;
        margin-right: auto;
        padding: 0 1rem;
        background-color: #1a1a1a;
        display: flex;
        align-items: center;
        justify-content: space-between;
      "
    >
      <nav
        style="
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        "
      >
        <a
          style="
            font-size: 1.5rem;
            font-weight: bold;
            color: #ffffff;
            text-decoration: none;
          "
          routerLink="/tasks"
          >Ng Task</a
        >
        <button
          type="button"
          style="
            color: #ffffff;
            background-color: #16a34a;
            border: none;
            padding: 0.625rem 1.25rem;
            font-size: 0.875rem;
            font-weight: 500;
            border-radius: 0.5rem;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.2s ease;
          "
          onmouseover="this.style.backgroundColor='#15803d'"
          onmouseout="this.style.backgroundColor='#16a34a'"
          (click)="logOut()"
        >
          Salir
        </button>
      </nav>
    </header>
    <router-outlet></router-outlet>
  `,
})

export default class LayoutComponet {

    private _authState = inject(AuthStateService);
  private _router = inject(Router);
  
  async logOut(){
    await this._authState.logOut();
    this._router.navigateByUrl('/auth/inscripcion');

  }

}